const ipoData = [
    {
      company_name: "BlueStock Ltd",
      logo: "assets/logo.png",
      price_band: "₹100 - ₹120",
      open_date: "2025-06-20",
      close_date: "2025-06-25",
      status: "upcoming",
      id: 1
    },
    {
      company_name: "GrowVest Corp",
      logo: "assets/logo.png",
      price_band: "₹150 - ₹170",
      open_date: "2025-06-10",
      close_date: "2025-06-14",
      status: "listed",
      id: 2
    }
  ];
  
  function loadIPOs(searchText = "", status = "all") {
    const container = document.getElementById('ipo-list');
    container.innerHTML = '';
  
    ipoData.forEach(ipo => {
      const nameMatch = ipo.company_name.toLowerCase().includes(searchText.toLowerCase());
      const statusMatch = status === 'all' || ipo.status === status;
  
      if (nameMatch && statusMatch) {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.setAttribute('data-status', ipo.status);
        card.innerHTML = `
          <div class="row g-0">
            <div class="col-md-2">
              <img src="${ipo.logo}" class="img-fluid rounded-start" alt="${ipo.company_name}">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <h5 class="card-title">${ipo.company_name}</h5>
                <p class="card-text">Price Band: ${ipo.price_band}</p>
                <p class="card-text">Dates: ${ipo.open_date} to ${ipo.close_date}</p>
                <a href="detail.html?id=${ipo.id}" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        `;
        container.appendChild(card);
      }
    });
  }
  
  // 🔁 When the dropdown filter is changed
document.getElementById('statusFilter').addEventListener('change', function () {
    const status = this.value; // get selected dropdown value
    const searchText = document.getElementById('searchInput').value; // get search box text
    loadIPOs(searchText, status); // refresh the list with both filters
  });
  
  // 🔍 When the user types in the search box
  document.getElementById('searchInput').addEventListener('input', function () {
    const searchText = this.value; // get the text typed in the box
    const status = document.getElementById('statusFilter').value; // get selected dropdown
    loadIPOs(searchText, status); // refresh the list with both filters
  });
  
  
  document.getElementById('statusFilter').addEventListener('change', function () {
    let status = this.value;
    document.querySelectorAll('.card').forEach(card => {
      if (status === 'all' || card.dataset.status === status) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  
  loadIPOs();
  