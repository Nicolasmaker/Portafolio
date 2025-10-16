# 🌟 Mi Portafolio - Nicolás Pérez

Portafolio profesional de desarrollador Full Stack con React, tema claro/oscuro y diseño responsive.

## 🚨 SOLUCIÓN: Proyecto aparece vacío al clonar

Si al descargar/clonar el proyecto en otro PC aparece vacío o en blanco, sigue estos pasos **exactamente**:

### ✅ **PASOS OBLIGATORIOS (en orden):**

#### 1️⃣ **Clonar el repositorio**
```bash
git clone https://github.com/Nicolasmaker/Portafolio.git
cd Portafolio
```

#### 2️⃣ **Verificar que Node.js esté instalado**
```bash
node --version
npm --version
```
- **Requiere Node.js 16+ y npm 7+**
- Si no tienes Node.js: [Descargar aquí](https://nodejs.org/)

#### 3️⃣ **INSTALAR DEPENDENCIAS (CRÍTICO)**
```bash
npm install
```
⚠️ **SIN ESTE PASO EL PROYECTO APARECERÁ VACÍO**

#### 4️⃣ **Ejecutar el proyecto**
```bash
npm run dev
```

#### 5️⃣ **Abrir en navegador**
- Ir a: `http://localhost:3000` (o el puerto que muestre)
- Si el puerto está ocupado, Vite automáticamente usará 3001, 3002, etc.

---

## 🔧 **Comandos Disponibles**

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | 🚀 Servidor de desarrollo |
| `npm run build` | 📦 Build para producción |
| `npm run preview` | 👀 Preview del build |
| `npm run lint` | 🔍 Linter de código |
| `npm test` | 🧪 Ejecutar tests |

---

## 📂 **Estructura del Proyecto**

```
mi-portafolio/
├── public/
│   ├── images/           # Imágenes del portafolio
│   └── manifest.json     # PWA manifest
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── context/         # React Context (tema)
│   ├── views/           # Páginas principales
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── index.html           # Template HTML
├── package.json         # Dependencias
└── vite.config.js       # Configuración Vite
```

---

## 🐛 **Problemas Comunes**

### ❌ **Pantalla en blanco/vacía**
**Causa:** No se instalaron las dependencias
**Solución:** 
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### ❌ **Error "Cannot resolve module"**
**Causa:** Dependencias faltantes
**Solución:**
```bash
npm install react react-dom react-bootstrap react-router-dom bootstrap
npm run dev
```

### ❌ **Puerto en uso**
**Causa:** Puerto 3000 ocupado
**Solución:** Vite automáticamente usa otro puerto, revisa la consola

### ❌ **Estilos no se cargan**
**Causa:** Bootstrap no importado
**Solución:** Ya está en `main.jsx`, solo ejecuta `npm install`

---

## 🌟 **Características**

- ✅ **Responsive Design** - Se adapta a todos los dispositivos
- ✅ **Tema Claro/Oscuro** - Switcher en header con persistencia
- ✅ **PWA Ready** - Instalable en móviles
- ✅ **SEO Optimizado** - Meta tags completos
- ✅ **Performance** - Lazy loading y optimizaciones
- ✅ **Accesibilidad** - ARIA labels y navegación keyboard

---

## 🚀 **Deploy**

### **Netlify/Vercel:**
1. Conectar repositorio GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### **GitHub Pages:**
```bash
npm run build
# Subir carpeta dist/
```

---

## 📞 **Contacto**

- **GitHub:** [Nicolasmaker](https://github.com/Nicolasmaker)
- **Portafolio:** [Mi Portafolio Web]

---

## 📝 **Licencia**

MIT License - Úsalo libremente para tus proyectos.
