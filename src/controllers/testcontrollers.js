let testControllers = (req, res) => {
  function generateRandomTimestamp() {
    // Get the current timestamp
    const now = new Date();

    // Calculate 7 days ago and 7 days from now
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneWeekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Choose randomly between past and future
    const isPast = Math.random() < 0.5; // 50% chance for past, 50% for future

    let randomTimestamp;
    if (isPast) {
      // Randomize within the past 7 days
      const randomOffsetPast = Math.floor(
        Math.random() * (oneWeekAgo.getTime() - now.getTime())
      );
      randomTimestamp = now.getTime() - randomOffsetPast;
    } else {
      // Randomize within the future 7 days
      const randomOffsetFuture = Math.floor(
        Math.random() * (oneWeekFromNow.getTime() - now.getTime())
      );
      randomTimestamp = now.getTime() + randomOffsetFuture;
    }

    return randomTimestamp;
  }

  if (Math.random() > 0.5 ? true : false) {
    let rn = Math.ceil(Math.random() * 20);
    let ordersArray = [];
    for (var i = 1; i <= rn; i++) {
      let order = {
        order_id: Math.ceil(Math.random() * (5000 - 1000) + 1000),
        arrive_at_utc: generateRandomTimestamp(),
        paid_with: Math.random() < 0.5 ? "cash" : "wallet",
        total_paid: +(Math.random() * (99.0 - 10.0) + 10).toFixed(2),
      };
      ordersArray.push(order);
    }
    res.status(200).json({ orders: [ordersArray] });
  } else {
    res.status(503).send();
  }
};

module.exports = { testControllers };
