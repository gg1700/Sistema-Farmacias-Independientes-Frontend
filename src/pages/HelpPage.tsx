import { FaRocket, FaClipboardList, FaBookOpen, FaHeadset } from 'react-icons/fa6';
import Card from '../components/ui/Card';
import { BsChatText, BsTelephone } from 'react-icons/bs';

const styles = {
  div: "border border-secondary",
  img: "w-30 h-25 object-cover rounded",
  title: "text-2xl text-second text-primary font-bold",
  text: "text-ms text-first text-lg",
  button_first: "bg-primary p-3 w-full sm:w-40 font-semibold text-background flex gap-1 items-center justify-center",
  button_second: "bg-background p-3 w-full sm:w-40 font-semibold text-primary border border-primary flex gap-1 items-center justify-center",
}

function Help() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto gap-8 p-4 md:p-8 overflow-x-hidden">
      <p className="text-gray-600 mb-6 text-lg">
        ¿En qué podemos ayudarte hoy? Encuentra guías rápidas, manuales detallados y soluciones técnicas para optimizar tu gestión farmacéutica.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <Card
          title="Primeros Pasos"
          text="Configuración inicial de categorías, proveedores y registro de tu primera compra."
          icon={<FaRocket size={25} />}
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
          icon={<FaHeadset size={25} />}
        />
      </div>
      <div className={`${styles.div} flex flex-col lg:flex-row flex-wrap items-center gap-6 w-full mt-2 p-6`}>
        <img src="https://img.magnific.com/foto-gratis/farmaceutica-joven-hispana-sonriendo-segura-pie-gesto-brazos-cruzados-farmacia_839833-7087.jpg" alt="" className={styles.img} />
        <div className="flex-1 min-w-0">
          <h3 className={styles.title}>¿Aún necesitas ayuda?</h3>
          <p className={styles.text}>Nuestro equipo de soporte técnico está disponible de Lunes a Viernes (8:00 - 18:00).</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button className={styles.button_first}>
            <BsChatText size={30} />
            <p>Contactar por correo</p>
          </button>
          <button className={styles.button_second}>
            <BsTelephone size={30} />
            <p>Llamar a Soporte</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Help;