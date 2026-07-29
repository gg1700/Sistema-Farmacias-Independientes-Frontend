import { FaRocket, FaClipboardList, FaBookOpen, FaHeadset } from 'react-icons/fa6';
import Card from '../components/ui/Card';
import { BsChatText, BsTelephone } from 'react-icons/bs';

const styles={
  div:"border border-secondary",
  img:"w-30 h-25",
  title:"text-2xl text-second text-primary font-bold",
  text:"text-ms text-first text-lg",
  button_first:"bg-primary p-3 w-40 font-semibold text-background flex gap-1 items-center justify-center",
  button_second:"bg-background p-3 w-40 font-semibold text-primary border border-primary flex gap-1 items-center justify-center",
}

function Help() {
  return (
    <div>
      <p className="text-gray-600 mb-6 text-lg">
        ¿En qué podemos ayudarte hoy? Encuentra guías rápidas, manuales detallados y soluciones técnicas para optimizar tu gestión farmacéutica.
      </p>
      <div className="flex gap-20 pl-10">
        <Card 
          title="Primeros Pasos" 
          text="Configuración inicial de categorías, proveedores y registro de tu primera compra." 
          icon={<FaRocket size={25}/>} 
        />
        <Card 
          title="Gestion de Inventario" 
          text="Control de stock, alertas de caducidad, lotes y categorización de medicamentos." 
          icon={<FaClipboardList size={25} />} 
        />
        <Card 
          title="Interfaz del Sistema" 
          text="Vista de las pantallas y opciones disponibles en cada módulo del sistema." 
          icon={<FaBookOpen size={25} />} 
        />
        <Card 
          title="Soporte Tecnico" 
          text="Reporte de errores, incidencias críticas y contacto directo con mantenimiento." 
          icon= {<FaHeadset size={25} />}
        />
      </div>
      <div className={`${styles.div} flex gap-20 mt-18 p-6`}>
        <img src="https://img.magnific.com/foto-gratis/farmaceutica-joven-hispana-sonriendo-segura-pie-gesto-brazos-cruzados-farmacia_839833-7087.jpg" alt="" className={styles.img}/>
        <div>
          <h3 className={styles.title}>¿Aún necesitas ayuda?</h3>
          <p className={styles.text}>Nuestro equipo de soporte técnico está disponible de Lunes <br/> a Viernes (8:00 - 18:00).</p>
        </div>
        <button className={styles.button_first}>
          <BsChatText size={50}/>
          <p>Contactar por correo</p>
        </button>
        <button className={styles.button_second}>
          <BsTelephone size={50}/>
          <p>Llamar a Soporte</p>
        </button>
      </div>
    </div>
  );
}

export default Help;
