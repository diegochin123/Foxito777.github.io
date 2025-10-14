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
