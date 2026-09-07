<?php
declare(strict_types=1);

header('Content-Type: application/json');

const TO_ADDRESS = 'jj@jjamesdesigns.com';
const FROM_ADDRESS = 'noreply@jjhiggins.com';
const MAX_LEN = 5000;

function respond(bool $ok, string $error = ''): never {
    echo json_encode(['ok' => $ok, 'error' => $error]);
    exit;
}

function clean(string $value): string {
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return mb_substr($value, 0, MAX_LEN);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    respond(false, 'Method not allowed');
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    http_response_code(400);
    respond(false, 'Invalid request');
}

if (!empty($data['company_website'])) {
    respond(true);
}

$firstName = clean((string)($data['first_name'] ?? ''));
$lastName = clean((string)($data['last_name'] ?? ''));
$email = clean((string)($data['email'] ?? ''));
$phone = clean((string)($data['phone'] ?? ''));
$projectType = clean((string)($data['project_type'] ?? ''));
$message = clean((string)($data['message'] ?? ''));
$site = clean((string)($data['site'] ?? ''));
$budget = clean((string)($data['budget'] ?? ''));
$company = clean((string)($data['company'] ?? ''));
$graphicType = clean((string)($data['graphic_type'] ?? ''));
$printType = clean((string)($data['print_type'] ?? ''));
$quantity = clean((string)($data['quantity'] ?? ''));

if ($firstName === '' || $lastName === '' || $projectType === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    respond(false, 'Please fill in your name, a valid email, project type, and message.');
}

$subject = mb_encode_mimeheader("New Quote Request - {$projectType}", 'UTF-8');
$lines = [
    "New quote request from jjamesdesigns.com:",
    "",
    "Name: {$firstName} {$lastName}",
    "Email: {$email}",
    "Phone: " . ($phone !== '' ? $phone : 'n/a'),
    "Project Type: {$projectType}",
];

if ($site !== '') $lines[] = "Current Site: {$site}";
if ($budget !== '') $lines[] = "Budget: {$budget}";
if ($company !== '') $lines[] = "Company: {$company}";
if ($graphicType !== '') $lines[] = "Graphic Type: {$graphicType}";
if ($printType !== '') $lines[] = "Print Type: {$printType}";
if ($quantity !== '') $lines[] = "Quantity: {$quantity}";

$lines[] = "";
$lines[] = "Message:";
$lines[] = $message;

$body = implode("\n", $lines) . "\n";

$replyToName = mb_encode_mimeheader("{$firstName} {$lastName}", 'UTF-8');
$headers = "From: " . FROM_ADDRESS . "\r\n"
    . "Reply-To: {$replyToName} <{$email}>\r\n"
    . "Content-Type: text/plain; charset=UTF-8";

$sent = mail(TO_ADDRESS, $subject, $body, $headers);

if (!$sent) {
    http_response_code(502);
    respond(false, 'Request could not be sent. Please email us directly.');
}

respond(true);
