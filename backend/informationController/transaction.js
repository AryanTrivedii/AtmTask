 const Users = require('../models/userSchema');
// withdraw cash


// withdraw cash
const withdraw = async (req, res) => {
   try {
    const { amount } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: 'Invalid amount' });
    }

    // Fetch user from the database
    const user = await Users.findOne();

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (amount > user.balance) {
        return res.status(400).json({ error: 'Insufficient funds' });
    }

    // Update user balance
    user.balance -= amount;
    await user.save();

    return res.status(200).json({ message: `Withdrawal successful. Remaining balance: ${user.balance}` });
   } catch (error) {
       console.log(error);
       return res.status(500).json({ error: 'Internal server error' });
   }
};



// Deposit cash


const deposit = async (req, res) => {
    try {
      const { amount, userId } = req.body;
  
      if (!amount || isNaN(amount) || amount <= 0) {
          return res.status(400).json({ error: 'Invalid amount' });
      }
  
      // Fetch user from the database
      const user = await Users.findById(userId);
  
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
  
      // Update user balance
      user.balance += amount;
      await user.save();
  
      return res.status(200).json({ message: `Deposit successful. Updated balance: ${user.balance}` });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
    


//changepin

const changepin = (req, res) => {
   try {
    
    const { userId } = req.params;
    const { oldPin, newPin } = req.body;

    // Find the user by ID
    const user = Users.find(u => u.id === parseInt(userId));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }if (user.pin !== oldPin) {
        return res.status(400).json({ error: 'Invalid old PIN' });
    }
user.pin = newPin;

    return res.status(200).json({ message: 'PIN changed successfully' });
   } catch (error) {
    console.log(error)
   }
};

//transaction history
const transactionHistory= (req, res) => {
    return res.status(200).json(transactionHistory);
};







module.exports = {
    withdraw,
    deposit,
    changepin,
    transactionHistory,
    
    
}
