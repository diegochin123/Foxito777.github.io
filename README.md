<<<<<<< HEAD
# Foxito777.github.io
Plataforma Web JuledToys publicado en GitHub pages
#
Proyecto Juled Toys 🎲

Este repositorio contiene el desarrollo de la plataforma sistema web **Juled Toys**, construido con html,css ,js y tecnologías web modernas.  
El equipo está trabajando con **Java JDK 21**.

---

## ⚙️ Requisitos de entorno
- **JDK 21** (obligatorio para compilar y ejecutar el backend).
- **Git** instalado y configurado.

---

## 🚀 Cómo ejecutar el proyecto
1. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
   cd proyecto-juled-toys/Juledtoys/Juledtoys
   ```


---

## 👥 Buenas prácticas de colaboración
- **No trabajar directamente en `main`**.  
  Cada desarrollador debe crear su rama:
  ```bash
  git checkout -b feature/nombre-funcionalidad
  ```
- Antes de empezar un trabajo nuevo:
  ```bash
  git pull origin main
  ```
- Una vez finalizado y aprobado el trabajo:
  - Hacer merge a `main`.
  - Eliminar la rama local y remota usada:
    ```bash
    git branch -d feature/nombre-funcionalidad
    git push origin --delete feature/nombre-funcionalidad
    ```

---

## 📌 Archivos de configuración importantes
- **`.gitignore`** → ya configurado para ignorar archivos de compilación, IDE y temporales.
- **`.gitattributes`** → asegura consistencia en finales de línea y manejo correcto de binarios.
- **`README.md`** → este archivo, con las reglas básicas del proyecto.

❗ **No borrar ni modificar** estos archivos sin consenso del equipo:
- `.gitignore`
- `.gitattributes`


---

## 📝 Reglas adicionales
- No subir archivos de compilación (`target/`, `build/`, etc.).
- No subir configuraciones de IDE locales (`.idea/`, `.vscode/`).
- No subir credenciales ni archivos `.env`.
- Antes de hacer commit, verificar qué se está subiendo:
  ```bash
  git status
  ```
- Para ver cambios a detalle:
  ```bash
  git diff
  ```

---
=======
# Proyecto Juled Toys — Guía de trabajo en equipo

## Reglas principales
1. No trabajar directamente en la rama `main`.
2. Cada integrante debe crear su propia rama para trabajar en una tarea.
3. Los cambios solo llegan a `main` mediante Pull Request (PR) y revisión de un compañero.
4. No borrar el archivo `.gitignore`.

## Flujo de trabajo
1. **Clonar el repositorio (primera vez):**
   ```bash
   git clone https://github.com/<USUARIO>/<REPO>.git
   cd <REPO>
   ```

2. **Crear una nueva rama para trabajar:**
   ```bash
   git checkout -b feature/nombre-tarea
   ```

3. **Guardar cambios:**
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   ```

4. **Subir rama al repositorio:**
   ```bash
   git push -u origin feature/nombre-tarea
   ```

5. **Abrir un Pull Request (PR) en GitHub:**
   - De tu rama hacia `main`.
   - Esperar revisión de un compañero.
   - Hacer merge después de la aprobación.

6. **Actualizar tu copia local con `main`:**
   ```bash
   git checkout main
   git pull origin main
   git checkout feature/nombre-tarea
   git merge main   # o git rebase main
   ```

7. **Eliminar la rama usada y crear una nueva:**
   - Una vez que tu PR fue aprobado y mergeado, elimina tu rama local:
     ```bash
     git branch -d feature/nombre-tarea
     ```
   - Actualiza `main`:
     ```bash
     git checkout main
     git pull origin main
     ```
   - Crea una nueva rama desde lo más actualizado:
     ```bash
     git checkout -b feature/nueva-tarea
     ```

## Consejos importantes
- No subir archivos basura, respeta el `.gitignore`.
- Mantener mensajes de commit claros y cortos.
- Revisar los PR antes de hacer merge.
- Eliminar ramas ya mergeadas y trabajar siempre en una nueva basada en la última versión de `main`. 

>>>>>>> 0844ecc (Portafolio)
