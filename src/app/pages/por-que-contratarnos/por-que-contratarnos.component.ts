import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-por-que-contratarnos',
  templateUrl: './por-que-contratarnos.component.html',
  styleUrls: [
    './por-que-contratarnos.component.scss',
    '../servicios/servicios.component.scss',
  ],
  encapsulation: ViewEncapsulation.None
})
export class PorQueContratarnosComponent implements OnInit {
  vMensajes: any[] = [
    {
      title: 'Iniciar un proyecto nuevo',
      parrafos: [
        'En caso de que nuestro restaurante aún no haya abierto, el tener a un lado un asesor y gestor de establecimientos de hostelería <b>nos ahorrará mucho tiempo y preocupaciones antes de la apertura</b>. Ya que un profesional nos ayudará a definir la propuesta  que se ofrecerá al público desde el principio.', 
        'También nos aconsejará en la compra de maquinaria, vajilla y utensilios para el restaurante, además de ayudarnos con el diseño en general para lograr una buena gestión del espacio.'
      ],
    },
    {
      title: 'Tramitación, gestión y evolución de la documentación',
      parrafos: [
        'Hay documentación en hostelería compleja, con poco tiempo para tramitar y presentar, además sin sinergia con tú establecimiento y para colmo con un sin fin de tramites para tener tu establecimiento a punto.', 
        'Imagina una empresa que muestre sinergias entre la documentación, costes, rentabilidades, sala, stock, proveedores, personal... que pueda reflejar un realidad real y poder trabajar en un realidad futura <b>somos el profesional que estas buscado</b>.', 
      ],
    },
    {
      title: 'Técnicas de venta y promoción de nuevos productos',
      parrafos: [
        'Muchos clientes llegan a los restaurantes buscando recomendaciones a la hora de comer y es demasiado habitual que los equipos de sala no estén preparados para ofrecerlas.', 
        'Por eso esta es una de las funciones más importantes de un asesor gastronómico, ya que <b>proporciona a los equipos de sala herramientas y técnicas de venta sugestiva</b> para que nuestros empleados puedan aconsejar correctamente a nuestros clientes y además aumentar la facturación.', 
      ],
    },
    {
      title: 'Búsqueda y gestión de proveedores',
      parrafos: [
        'Disponer de buenos proveedores es de vital importancia para nuestro restaurante, porque ellos inciden directamente en la calidad y el coste de los productos que ofrecemos a nuestros clientes.', 
        'Y el papel de asesor es de mucha utilidad en este punto, puesto que <b>nos ayudará a encontrar los mejores proveedores y a negociar con ellos</b> para obtener los mejores precios y aumentar la rentabilidad de nuestro restaurante.',
      ],
    },
    {
      title: 'Seleccionar y formar al personal',
      parrafos: [
        'Hoy en día, muchos de los problemas que tienen los restaurantes están relacionados con la mala gestión del personal, así que, tener empleados responsables y formados sin duda marcará la diferencia con nuestra competencia.', 
        'El asesor se encargará de buscar al personal adecuado para nuestro restaurante y de entrenarlos</b> para que ofrezcan una buena imagen del negocio y que nuestros clientes se sientan siempre cómodos y bien atendidos.', 
      ],
    },
    {
      title: 'Mejorar la gestión en la cocina',
      parrafos: [
        'Algunas de las soluciones que nos puede ofrecer un asesor gastronómico a la hora de gestionar mejor nuestra cocina son las siguientes: calcular los escandallos de cada plato, analizar la rentabilidad de nuestro menú, corregor los problemas sobre los objetivos que se tienen establecidos o implementar y dar seguimiento al control de calidad.',
      ],
    },
    {
      title: 'Mantenernos constantemente actualizados',
      parrafos: [
        'Se recomienda que los restaurantes estén en constante renovación, es decir, hacer cambios que ayuden a <b>adaptar nuestro negocio a las nuevas modalidades y exigencias de los comensales</b>.', 
        'Algunos de estos cambios pueden ser: la renovación del menú, detalles que ayuden a que el cliente se sienta especial o la organización de eventos que llamen la atención del público, entre otros muchos más.', 
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
  }
}
