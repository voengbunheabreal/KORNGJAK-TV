 document.addEventListener('DOMContentLoaded', function () {
    const movies = [
      {
        id: 1,
        title: "ទេវបុត្រណាចា",
        image: "/Content-imgae-Popular/ទេវបុត្រណាចា.jpg",
        duration: "1 ម៉ោង 36 នាទី",
        type: "សម្ដែង",
        link: "https://www.youtube.com/watch?v=fkJ4D7DxYvc"
      },
      {
        id: 2,
        title: "ប្រមាញ់ព្រាយ វគ្គ2",
        image: "/Content-imgae-Popular/ប្រមាញ់ព្រាយ វគ្គ2.jpg",
        duration: "1 ម៉ោង 40 នាទី",
        type: "ថ្មីៗ",
        link: "https://www.youtube.com/watch?v=O1gq_R1daEM"
      },
      {
        id: 3,
        title: "សំណើចគ្រួសារសេដ្ឋី​លា",
        image: "/Content-imgae-Popular/សំណើចគ្រួសារសេដ្ឋី​លា.jpg",
        duration: "1 ម៉ោង 57 នាទី",
        type: "សម្ដែង",
        link: "https://www.youtube.com/watch?v=6RKLERH-n9E"
      },
      {
        id: 4,
        title: "ពិភពលោកធំធេង",
        image: "/Content-imgae-Popular/ពិភពលោកធំធេង.jpg",
        duration: "2 ម៉ោង 0 នាទី",
        type: "ថ្មី",
        link: "https://www.youtube.com/watch?v=K0Ky-jOJqw4"
      },
      {
        id: 5,
        title: "យុទ្ធសិល្ប៍ពស់ស",
        image: "/Content-imgae-Popular/យុទ្ធសិល្ប៍ពស់ស.jpg",
        duration: "1 ម៉ោង 30 នាទី",
        type: "សម្ដែង",
        link: "https://www.youtube.com/watch?v=uCk_65mm3mQ"
      },
      {
        id: 6,
        title: "គម្ពីតែងតាំងទេវតា",
        image: "/Content-imgae-Popular/គម្ពីតែងតាំងទេវតា.jpg",
        duration: "2 ម៉ោង 10 នាទី",
        type: "ថ្មី",
        link: "https://www.youtube.com/watch?v=E6Et5Ps53hg"
      }
    ];

    const moviesContainer = document.getElementById('moviesContainer');

    movies.forEach(movie => {
      const movieLink = document.createElement('a');
      movieLink.href = movie.link;
      movieLink.target = movie.link.startsWith('http') ? '_blank' : '_self'; // Open external links in new tab
      movieLink.className = 'block relative bg-gray-800 rounded-lg overflow-hidden mt-2 hover:opacity-90 transition';

      movieLink.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" class="w-full h-auto object-cover" />
        <div class="absolute top-2 left-2 ${movie.type === 'សម្ដែង' ? 'bg-red-600' : 'bg-green-600'} text-white px-2 font-bold py-1 rounded text-sm">
          ${movie.type}
        </div>
        <div class="p-4">
          <h3 class="text-lg font-bold">${movie.title}</h3>
          <p class="text-sm text-gray-400 font-bold">⏳ ${movie.duration}</p>
        </div>
      `;

      moviesContainer.appendChild(movieLink);
    });
  });