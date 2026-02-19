# Cómo subir tu Landing Page a GitHub ("Robotiza-AI")

Como Git no está instalado en tu terminal actual, **primero debes instalarlo** y luego ejecutar estos comandos.

## Paso 1: Instalar Git
Si no lo tienes, descárgalo aquí: [git-scm.com/download/win](https://git-scm.com/download/win)  
*(Dale a "Siguiente" a todo durante la instalación).*

## Paso 2: Ejecutar los comandos
Abre tu terminal (PowerShell o CMD) en la carpeta del proyecto:
`c:\Users\vivan\Habilidades\aaron-automations`

Copia y pega estos comandos **uno por uno** (son los exactos para tu repo de la imagen):

```bash
# 1. Iniciar repositorio
git init

# 2. Preparar todos los archivos
git add .

# 3. Guardar los cambios
git commit -m "Primera subida de Landing Page"

# 4. Renombrar rama a 'main'
git branch -M main

# 5. Conectar con tu repositorio Robotiza-AI
git remote add origin https://github.com/aaronework13-sketch/Robotiza-AI.git

# 6. Subir todo a la nube
git push -u origin main
```

Si te pide usuario y contraseña al final, usa tus credenciales de GitHub.
