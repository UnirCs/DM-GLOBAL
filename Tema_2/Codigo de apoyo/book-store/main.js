// API base URL
const API_BASE_URL = 'https://mock.apidog.com/m1/955638-939419-default';

// Elementos del DOM
const booksGrid = document.getElementById('booksGrid');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const filterButtons = document.querySelectorAll('.filter-btn');

// Variable para almacenar todos los libros
let allBooks = [];

// Función para mostrar/ocultar elementos
function showElement(element) {
    element.style.display = 'block';
}

function hideElement(element) {
    element.style.display = 'none';
}

// Función para mostrar loading
function showLoading() {
    showElement(loading);
    hideElement(booksGrid);
    hideElement(error);
}

// Función para mostrar libros
function showBooks() {
    hideElement(loading);
    showElement(booksGrid);
    hideElement(error);
}

// Función para mostrar error
function showError() {
    hideElement(loading);
    hideElement(booksGrid);
    showElement(error);
}

// Función para cargar libros desde la API
async function loadBooks(category = '') {
    showLoading();

    try {
        let url = `${API_BASE_URL}/books`;
        if (category) {
            url += `?category=${category}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const books = await response.json();
        allBooks = books;
        displayBooks(books);
        showBooks();

    } catch (err) {
        console.error('Error al cargar libros:', err);
        showError();
    }
}

// Función para mostrar libros en el grid
function displayBooks(books) {
    if (!books || books.length === 0) {
        booksGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <p>No se encontraron libros para esta categoría.</p>
            </div>
        `;
        return;
    }

    booksGrid.innerHTML = books.map(book => `
        <div class="book-card" onclick="goToBookDetail(${book.id})">
            <h3>${book.titulo || book.title || 'Título no disponible'}</h3>
            <p><strong>Autor:</strong> ${book.autor || book.author || 'Autor no disponible'}</p>
            <p><strong>Precio:</strong> ${book.precio || book.price || 'Precio no disponible'}</p>
            <p class="book-description">${book.descripcion || book.description || 'Descripción no disponible'}</p>
            <span class="book-category">${book.categoria || book.category || 'Sin categoría'}</span>
        </div>
    `).join('');
}

// Función para navegar al detalle del libro
function goToBookDetail(bookId) {
    window.location.href = `book-detail.html?id=${bookId}`;
}

// Función para manejar el filtrado por categoría
function setupFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Agregar clase active al botón clickeado
            button.classList.add('active');

            // Obtener la categoría del botón
            const category = button.dataset.category;

            // Cargar libros con el filtro
            loadBooks(category);
        });
    });
}

// Función de inicialización
function init() {
    setupFilters();
    loadBooks(); // Cargar todos los libros al inicio
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
