# Lubrimás - Landing Page

Lubrimás es una landing page profesional para servicios de lavado y lubricación vehicular. Ofrece funcionalidades como secciones heroícas, mostrar servicios, beneficios, banners promocionales y un formulario de contacto.

## Características Principales

- **Responsividad**: Diseño adaptativo para diferentes dispositivos.
- **Seo Optimizado**: Metadata SEO incluidas en el archivo `index.html`.
- **Desempeño Eficaz**: Configuración para mejorar la velocidad del sitio web.
- **Gestión de Contenido Admin**: Admin dashboard para configurar banners y programar promociones.

## Instalación y Configuración

### Paso 1: Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/username/lubrimas.git
cd lubrimas
```

### Paso 2: Instalar Dependencias

Instala las dependencias del proyecto usando `pnpm`:

```bash
pnpm install
```

### Paso 3: Configuración del Proyecto

Asegúrate de tener un archivo `.env.local` con la configuración necesaria. Un ejemplo básico podría ser:

```plaintext
VITE_API_URL=https://api.example.com
```

### Paso 4: Ejecutar el Proyecto

Inicia el servidor de desarrollo para ver tu proyecto en acción:

```bash
pnpm dev
```

## Despliegue

Para desplegar tu proyecto, puedes seguir estos pasos generales:

1. **Contruir la Aplicación**: Genera un build optimizado del proyecto.

   ```bash
   pnpm run build
   ```

2. **Despliega el Build**: Sube los archivos en la carpeta `dist` a tu servidor web o plataforma de hosting.

## Licencia

Este proyecto está licenciado bajo la [MIT License](https://opensource.org/licenses/MIT). Por favor,
