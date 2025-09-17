// API base URL
const API_BASE_URL = 'https://mock.apidog.com/m1/955638-939419-default';

// Elementos del DOM
const bookDetail = document.getElementById('bookDetail');
const reviewsSection = document.getElementById('reviewsSection');
const reviewsList = document.getElementById('reviewsList');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const reviewForm = document.getElementById('reviewForm');

// Variable para almacenar el ID del libro actual
let currentBookId = null;

// Función para obtener parámetros de la URL
function getBookIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

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
    hideElement(bookDetail);
    hideElement(reviewsSection);
    hideElement(error);
}

// Función para mostrar contenido
function showContent() {
    hideElement(loading);
    showElement(bookDetail);
    showElement(reviewsSection);
    hideElement(error);
}

// Función para mostrar error
function showError() {
    hideElement(loading);
    hideElement(bookDetail);
    hideElement(reviewsSection);
    showElement(error);
}

// Función para cargar detalles del libro
async function loadBookDetail() {
    currentBookId = getBookIdFromURL();

    if (!currentBookId) {
        showError();
        return;
    }

    showLoading();

    try {
        // Cargar detalles del libro
        const bookResponse = await fetch(`${API_BASE_URL}/books/${currentBookId}`);

        if (!bookResponse.ok) {
            throw new Error(`Error HTTP: ${bookResponse.status}`);
        }

        const book = await bookResponse.json();
        displayBookDetail(book);

        // Cargar reseñas del libro
        await loadReviews();

        showContent();

    } catch (err) {
        console.error('Error al cargar detalles del libro:', err);
        showError();
    }
}

// Función para mostrar detalles del libro
function displayBookDetail(book) {
    const bookDetailHTML = `
        <h2>${book.titulo || book.title || 'Título no disponible'}</h2>
        <div class="book-info">
            <div class="book-meta">
                <p><strong>Autor:</strong> ${book.autor || book.author || 'No disponible'}</p>
                <p><strong>Precio:</strong> ${book.precio || book.price || 'No disponible'}</p>
                <p><strong>Categoría:</strong> ${book.categoria || book.category || 'No disponible'}</p>
                <p><strong>ISBN:</strong> ${book.isbn || 'No disponible'}</p>
                <p><strong>Páginas:</strong> ${book.paginas || book.pages || 'No disponible'}</p>
                <p><strong>Editorial:</strong> ${book.editorial || book.publisher || 'No disponible'}</p>
            </div>
            <div class="book-description">
                <h3>Descripción</h3>
                <p>${book.descripcion || book.description || 'Descripción no disponible'}</p>
            </div>
        </div>
    `;

    bookDetail.innerHTML = bookDetailHTML;

    // Actualizar el título de la página
    document.title = `${book.titulo || book.title || 'Libro'} - Book Store`;
}

// Función para cargar reseñas
async function loadReviews() {
    try {
        const reviewsResponse = await fetch(`${API_BASE_URL}/books/${currentBookId}/reviews`);

        if (!reviewsResponse.ok) {
            throw new Error(`Error HTTP: ${reviewsResponse.status}`);
        }

        const reviews = await reviewsResponse.json();
        displayReviews(reviews);

    } catch (err) {
        console.error('Error al cargar reseñas:', err);
        reviewsList.innerHTML = '<p>Error al cargar las reseñas.</p>';
    }
}

// Función para mostrar reseñas
function displayReviews(reviews) {
    if (!reviews || reviews.length === 0) {
        reviewsList.innerHTML = '<p>No hay reseñas disponibles para este libro.</p>';
        return;
    }

    const reviewsHTML = reviews.map(review => {
        const stars = '⭐'.repeat(review.puntuacion || review.rating || 0);
        const date = review.fecha || review.date || 'Fecha no disponible';
        const comment = review.comentario || review.comment || 'Comentario no disponible';

        return `
            <div class="review-item">
                <div class="review-header">
                    <span class="review-rating">${stars} (${review.puntuacion || review.rating || 0}/5)</span>
                    <span class="review-date">${date}</span>
                </div>
                <p class="review-comment">${comment}</p>
            </div>
        `;
    }).join('');

    reviewsList.innerHTML = reviewsHTML;
}

// Función para enviar nueva reseña
async function submitReview(rating, comment) {
    try {
        const reviewData = {
            puntuacion: parseInt(rating),
            comentario: comment
        };

        const response = await fetch(`${API_BASE_URL}/books/${currentBookId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Mostrar mensaje de éxito
        showSuccessMessage('¡Reseña enviada exitosamente!');

        // Limpiar formulario
        reviewForm.reset();

        // Recargar reseñas para mostrar la nueva
        await loadReviews();

    } catch (err) {
        console.error('Error al enviar reseña:', err);
        showErrorMessage('Error al enviar la reseña. Por favor, inténtalo de nuevo.');
    }
}

// Función para mostrar mensaje de éxito
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        background: #4caf50;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        text-align: center;
    `;
    successDiv.textContent = message;

    const form = document.querySelector('.add-review');
    form.insertBefore(successDiv, reviewForm);

    // Remover el mensaje después de 3 segundos
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Función para mostrar mensaje de error
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        background: #f44336;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        text-align: center;
    `;
    errorDiv.textContent = message;

    const form = document.querySelector('.add-review');
    form.insertBefore(errorDiv, reviewForm);

    // Remover el mensaje después de 3 segundos
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Función para configurar el formulario de reseñas
function setupReviewForm() {
    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

        if (!rating || !comment.trim()) {
            showErrorMessage('Por favor, completa todos los campos.');
            return;
        }

        // Deshabilitar el botón de envío durante el proceso
        const submitBtn = reviewForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        try {
            await submitReview(rating, comment);
        } finally {
            // Rehabilitar el botón
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// Función de inicialización
function init() {
    setupReviewForm();
    loadBookDetail();
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
