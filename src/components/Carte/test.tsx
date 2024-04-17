<ul
  className={
    menuOpen[item.id] ? ` ${item2.id} menuClose ` : `${item2.id}cache  `
  }
>
  <li key={item2.id}>
    <div className="prestation">
      <h4>{item2.prestation}</h4>
      <p>{item2.price} €</p>
    </div>
    <div className="description">
      <p>{`${item2.description}: `} </p>
      <p className="time"> {item2.time} min</p>
    </div>
  </li>
</ul>;
