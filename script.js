//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    if (text && !isNaN(delay)) {
        await sleep(delay);
        document.getElementById('output').textContent = text;
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
