# Automatización de Registro Fotográfico SST

Herramienta de automatización para el registro de permisos de trabajo en alturas. Captura datos y fotos desde Microsoft Forms, y los consolida automáticamente en un archivo de Excel insertando las imágenes directamente en las celdas (sin dejar links).

## Características principales
*   **100% Microsoft Ecosystem:** Funciona con Forms, Power Automate, Excel Online y Office Scripts.
*   **Sin Costos Extra:** Utiliza conectores estándar y licencias base de Microsoft 365.
*   **Solución al Timeout de Excel:** Implementación de técnica de *Chunking* (división de Base64) para procesar fotos de alto peso (6MB+) sin que el flujo colapse.
*   **Limpieza Automática:** Reemplaza el link de SharePoint que genera Forms por la imagen incrustada en la celda.

## Arquitectura de la Solución
1.  **Microsoft Forms:** Recolecta los datos y las fotos.
2.  **Power Automate:** Recibe la respuesta, guarda la fila en Excel, descarga la foto, la divide y la envía.
3.  **Office Scripts:** Recibe el link y la imagen en Base64, busca la celda, borra el link e inserta la imagen ajustada al tamaño de la celda.

## Requisitos
*   Cuenta de Microsoft 365 (Business o Education).
*   Acceso a Microsoft Forms, Power Automate y Excel Online.

## Guía de Instalación y Configuración
*(Aquí pones los pasos detallados: Configurar el Forms, el Excel, pegar el script y configurar el flujo)*

## Solución de Problemas (Troubleshooting)
*   **Error de Timeout:** Explicar el truco del Chunking.
*   **Problema de duplicados:** Explicar por qué se debe desvincular el Excel de Forms para que solo Power Automate escriba.

## Licencia
Este proyecto está bajo la Licencia MIT.