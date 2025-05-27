const jobsDiv = document.getElementById('jobs');
const searchInput = document.getElementById('search');

async function fetchJobs(query = '') {
  const res = await fetch(`https://remotive.io/api/remote-jobs?search=${query}`);
  const data = await res.json();
  displayJobs(data.jobs);
}

function displayJobs(jobs) {
  jobsDiv.innerHTML = '';
  jobs.slice(0, 10).forEach(job => {
    const div = document.createElement('div');
    div.className = 'bg-white p-4 rounded shadow';
    div.innerHTML = `
      <h2 class="font-bold text-lg">${job.title}</h2>
      <p class="text-sm text-gray-600">${job.company_name}</p>
      <a href="${job.url}" target="_blank" class="text-blue-500">Apply</a>
    `;
    jobsDiv.appendChild(div);
  });
}

searchInput.addEventListener('input', () => {
  fetchJobs(searchInput.value);
});

fetchJobs();
