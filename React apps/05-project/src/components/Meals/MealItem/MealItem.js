import classes from "./MealItem.module.css";
import MeilItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = `$${props.price}`


  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      
      </div>
      <div>
          <MeilItemForm />
      </div>
    </li>
  );
};

export default MealItem;
