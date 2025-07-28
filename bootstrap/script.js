
   fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        const products = data.products;
        const tableBody = document.getElementById('userTableBody');

        products.forEach(product => {
          const row = document.createElement('tr');

          row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td><img src="${product.thumbnail}" width="60" height="60"></td>
            <td>${product.description}</td>
            <td>${product.brand}</td>
            <td>${product.category}</td>
            <td>
              <button class="btn btn-warning btn-sm me-5">
              Edit
              </button>
              <button class="btn btn-success btn-sm me-5">
               delete
              </button>
            </td>
          `;

          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
