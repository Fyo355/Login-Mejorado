<h1 align="center">
  Login Mejorado
</h1>
<h4 align="center">Login de Roles pero con ciertas modifiaciones.</h4>


## Puntos Importantes

* La Base de Datos es MySQL

![image](https://user-images.githubusercontent.com/94048851/208270921-01246556-d44c-4480-9e3b-899f6fb4d297.png)


* La encriptacion de las contraseñas esta hecha con bcryptjs

![image](https://user-images.githubusercontent.com/94048851/208270934-a6e2efc4-74f7-44cf-bc99-e9f1b2aa6c85.png)


* Implementacion de JSON WEB TOKEN


* Implementacion de modulos handle para:

  - Mostrar Errores
 
 
  - Encriptacion y Comparacion de contraseñas


  - Creacion de JSONWEBTOKEN


  - Validacion de resultados


![image](https://user-images.githubusercontent.com/94048851/208270946-78778dec-c637-47c1-acb0-96c2f56fe51b.png)


* Implementacion de Validators para el Login y la Creacion de Usuarios

![image](https://user-images.githubusercontent.com/94048851/208270963-d763773a-36dd-42bd-ba22-80b71e5d82be.png)


* Implementacion de Middleware en Rutas para:


  - Autenticacion
   
  - Autenticacion de Roles
  
 ![image](https://user-images.githubusercontent.com/94048851/208271024-b80ad034-6679-4ca5-a7ca-a3efb8741743.png) 
 

![image](https://user-images.githubusercontent.com/94048851/208271032-a0c6488e-5e10-4a99-a428-1e0e7a7f492b.png)


* Modificacion del modelo de usuarios para la creacion de los mismos, ahora esta mas simplificado y solo se pueden elegir 3 Roles

![image](https://user-images.githubusercontent.com/94048851/208270993-eea97691-0788-4a66-a3c8-16f7ecbcbfa4.png)


* Modificacion necesaria en el controlador de creacion de usuarios

![image](https://user-images.githubusercontent.com/94048851/208271062-7d1ef2b6-225d-4ae5-98ff-85a4ecefe4bd.png)


* Modifiacion necesaria en el controlador de autenticacion

![image](https://user-images.githubusercontent.com/94048851/208271047-fb238f46-8be7-4535-ba99-6672fc3a6d64.png)


* Respuestas del Login en Postman

![image](https://user-images.githubusercontent.com/94048851/208271072-a59de32d-b3df-4637-9bab-cfb6385e95ee.png)

* Rutas con capas de seguridad

![image](https://user-images.githubusercontent.com/94048851/208271092-ae955f90-28d6-4b55-8b3b-c1a105ea52dc.png)


* Destacar que pese a las modifiaciones el Login sigue funcionando perfectamente en React   


