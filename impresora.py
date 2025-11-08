# esta es una impresora de archivos en blanco
for i in range(1, 101):
    nombre_archivo = f"{i}.html"
    with open(nombre_archivo, "w", encoding="utf-8") as archivo:
        archivo.write(f'')# en esta parte se pude agregar un comentario que aparecera en cada archivo
print("✅ Se generaron 100 archivos del 1.html al 100.html correctamente.")
