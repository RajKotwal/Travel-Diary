const form = document.getElementById('entry-form')
const entriesDiv = document.getElementById('entries')
form.addEventListener('submit', async (e) => {
e.preventDefault()
const formData = new FormData(form)
const data = Object.fromEntries(formData)
await fetch('/api/entries', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data)
})
form.reset()
loadEntries()
})
async function loadEntries() {
const res = await fetch('/api/entries')
const data = await res.json()
entriesDiv.innerHTML = data.map(entry => `
<div class="entry">
<h3>${entry.title}</h3>
<p><b>${entry.date}</b> – ${entry.location}</p>
<p>${entry.description}</p>
${entry.imageUrl ? `<img src="${entry.imageUrl}" width="200">` : ''}
</div>
`).join('')
}
loadEntries()