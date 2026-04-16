const Rating = ({ value }) => {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`text-lg ${
                        value >= star ? "text-pink-500" : "text-purple-300"
                    }`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rating;