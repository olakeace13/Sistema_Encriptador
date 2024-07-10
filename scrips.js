console.log('JavaScript file loaded');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('encryptButton').addEventListener('click', function() {
        let inputText = document.getElementById('inputText').value;
        let encryptedText = btoa(inputText); // Simple Base64 encryption
        document.getElementById('encryptedText').value = encryptedText;
    });

    document.getElementById('decryptButton').addEventListener('click', function() {
        let encryptedText = document.getElementById('encryptedText').value;
        try {
            let decryptedText = atob(encryptedText); // Simple Base64 decryption
            document.getElementById('outputText').value = decryptedText;
        } catch (e) {
            document.getElementById('outputText').value = "Invalid encrypted text.";
        }
    });
});
