const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const { createClient } = require('@supabase/supabase-js');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors()); // Enable CORS for all routes
app.use(express.json());;

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Create auth user
  const { data: user, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name, 
      },
    },
  });

  if (authError) {
    console.log(authError);
    return res.status(401).json({ error: authError.message });
  }

  res.status(201).json({ user });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { data: session, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ session });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});