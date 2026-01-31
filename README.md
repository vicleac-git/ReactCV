# CV Interactivo - Víctor Leal Acosta

**[Ver sitio en vivo](https://vicleac-git.github.io/ReactCV/)**

CV interactivo y dinámico desarrollado con React, TypeScript y Vite. Los datos se gestionan de forma dinámica mediante Google Sheets API, permitiendo actualizaciones sin necesidad de redesplegar.

## Características

- **Diseño Moderno**: Interfaz elegante con gradientes violet/cyan y efectos glassmorphism
- **Totalmente Responsive**: Optimizado para dispositivos móviles, tablets y escritorio
- **Contenido Dinámico**: Datos actualizables en tiempo real desde Google Sheets
- **Animaciones Suaves**: Transiciones fluidas y efectos hover interactivos
- **Múltiples Páginas**: Secciones detalladas para cada proyecto
- **Contacto Directo**: Botón de contacto siempre visible en el navbar
- **Rendimiento Optimizado**: Build ligero (342 KB JS, 14 KB CSS)
- **Seguridad**: Sanitización de HTML con DOMPurify

## Tecnologías

- **React 19**: Última versión con rendering optimizado
- **TypeScript**: Tipado estático para mayor robustez
- **Vite**: Build tool ultra-rápido
- **React Router DOM**: Navegación SPA sin recargas
- **Tailwind CSS**: Framework de utilidad para diseño rápido y responsivo
- **DOMPurify**: Protección contra XSS
- **Google Sheets API**: Backend sin servidor para gestión de datos

## Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/vicleac-git/ReactCV.git
cd ReactCV

# Instalar dependencias
pnpm install

# Configurar variables de entorno
# Crear archivo .env con:
# VITE_API_URL=tu_url_de_google_sheets_api

# Iniciar servidor de desarrollo
pnpm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Build de Producción

```bash
# Compilar para producción
pnpm run build

# Previsualizar build localmente
pnpm run preview
```

## Despliegue

El proyecto se despliega automáticamente en **GitHub Pages** mediante GitHub Actions:

1. Cada push a la rama `master` activa el workflow
2. Se ejecuta el build de producción
3. Los archivos se despliegan automáticamente

### Configuración Manual (primera vez)

1. **Habilitar GitHub Pages:**
   - Settings → Pages
   - Source: GitHub Actions

2. **Estructura del Proyecto:**
   ```
   ReactCV-vicleac/
   ├── .github/workflows/   # GitHub Actions
   ├── public/              # Assets estáticos
   ├── src/
   │   ├── Components/      # Componentes React
   │   ├── pages/          # Páginas de proyectos
   │   ├── layouts/        # Layouts compartidos
   │   ├── hooks/          # Custom hooks (API)
   │   └── types.ts        # TypeScript interfaces
   ├── vite.config.ts      # Configuración Vite
   └── package.json
   ```

## Gestión de Contenido

Los datos del CV se gestionan desde Google Sheets:

- **Perfil**: Información personal y resumen
- **Experiencia**: Historial profesional y académico
- **Habilidades**: Skills técnicas y blandas
- **Formación Complementaria**: Cursos y certificaciones
- **Otra Experiencia**: Otro tipo de experiencia profesional (voluntariados, proyectos puntuales, etc.)
- **Portfolio**: Proyectos destacados con detalles

## Secciones Principales

- **Hero**: Presentación con foto y resumen
- **Experiencia**: Timeline de experiencia profesional y educación
- **Habilidades**: Skills técnicas con niveles y soft skills
- **Portafolio**: Proyectos destacados con páginas dedicadas
- **Formación**: Cursos y certificaciones con filtros por año
- **Otra Experiencia**: Colaboraciones y proyectos sociales

## Scripts Disponibles

```bash
pnpm run dev      # Servidor de desarrollo
pnpm run build    # Build de producción
pnpm run preview  # Preview del build
pnpm run lint     # Ejecutar ESLint
```

## Licencia y Derechos de Autor

Este proyecto está bajo **licencia MIT** (ver archivo [LICENSE](LICENSE)).

### Código
Eres libre de usar el código como referencia para tu propio portafolio. Por favor:
- Adapta el contenido a tu propia experiencia
- No copies directamente mi información personal, CV o proyectos
- Da crédito si usas partes significativas del código

### Contenido e Imágenes
El contenido personal, fotografías y descripciones de proyectos están protegidos por derechos de autor.

**Ver detalles completos**: [ATTRIBUTION.md](ATTRIBUTION.md)

---

**Desarrollado con ❤️ por Víctor Leal Acosta usando React + TypeScript + Vite**
