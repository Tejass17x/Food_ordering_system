function CategoryCard({
  name,
  image,
  onClick,
  selected,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        flex-shrink-0
        w-[100px]
        sm:w-[120px]
        md:w-[140px]
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
        p-3
        rounded-1xl
        transition-all
        duration-200
        ${
          selected
            ? "bg-orange-100 shadow-lg"
            : "bg-white "
        }
        hover:scale-105
      `}
    >

      <img
        src={image}
        alt={name}
        className="
          w-16
          h-16
          sm:w-20
          sm:h-20
          md:w-24
          md:h-24
          rounded-full
          object-cover
        "
      />

      <h3
        className="
          mt-3
          text-sm
          sm:text-base
          font-semibold
          text-center
          truncate
          w-full
        "
      >
        {name}
      </h3>

    </div>
  );
}

export default CategoryCard;