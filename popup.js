const passwordEl = document.getElementById('password');
const resultEl   = document.getElementById('result');
const copyBtnEl  = document.getElementById('copyBtn');
const statusEl   = document.getElementById('status');

function showResult(text) {
    resultEl.textContent = text;
    resultEl.classList.remove('empty');
    copyBtnEl.classList.add('visible');
}

document.getElementById('encryptBtn').addEventListener('click', () => {
    const val = passwordEl.value.trim();
    if (!val) return flash('Please enter a password.');
    showResult(encrypt_password(val));
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const val = passwordEl.value.trim();
    if (!val) return flash('Please enter a password.');
    showResult(decrypt_password(val));
});

copyBtnEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.textContent)
        .then(() => flash('Copied!'))
        .catch(() => flash('Copy failed — try manually.'));
});

function flash(msg) {
    statusEl.textContent = msg;
    setTimeout(() => statusEl.textContent = '', 2000);
}