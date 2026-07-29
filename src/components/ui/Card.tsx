interface CardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}


const styles={
    div:"w-50 border border-secondary bg-background p-3",
    title:"text-primary text-xl text-second font-bold",
    text:"text-ms text-first mt-4 text-sm",
    icon:"text-background bg-primary w-20 h-13 flex items-center justify-center rounded-sm",
}


function Card({title,text,icon}: CardProps){
  return(
    <div className={styles.div}>
        <div className="flex gap-4">
        <div className={styles.icon}>{icon}</div>
        <h4 className={styles.title}>{title}</h4>
        </div>
        <p className={styles.text}>{text}</p>
    </div>
  );  
}

export default Card;