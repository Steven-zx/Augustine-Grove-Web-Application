console.log('dirname:', __dirname);
console.log('cwd:', process.cwd());

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Supabase client
const supabaseUrl = 'https://bynplwqqzlzfbdrbvuzk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5bnBsd3Fxemx6ZmJkcmJ2dXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNDQ4NDIsImV4cCI6MjA2MjgyMDg0Mn0.w69ANA33wQnVONct7WX-lDrWqFZNWhuV96iHf5AKrXM';
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'pages')));
app.use('/admin', express.static(path.join(__dirname, 'admin')));

// Routes
app.get('/', (_, res) => res.redirect('/login'));

// API endpoints
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password, fullName, address, mobileNumber } = req.body;

    // First, sign up with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          address,
          mobile_number: mobileNumber
        }
      }
    });

    if (authError) throw authError;

    res.status(200).json({ 
      message: "Signup successful! Please check your email for verification.", 
      data: authData 
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ 
      email, 
      password 
    });

    if (error) throw error;

    res.status(200).json({ 
      message: "Login successful!", 
      data,
      redirect: '/index' 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(401).json({ error: error.message });
  }
});

// Announcements API
app.get('/api/announcements', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .order('date', { ascending: false }); // Newest first by default

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching announcements:', error);
    res.status(500).json({ error: error.message });
  }
});

// Admin Announcements API endpoint
app.post('/api/admin/announcements', async (req, res) => {
  try {
    const { title, description, category, importance } = req.body;
    
    const { data, error } = await supabase
      .from('announcements')
      .insert([{
        title,
        description,
        category: category || 'General',
        importance: importance || 'Medium',
        date: new Date().toISOString()
      }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    console.error('Admin announcement error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Serve HTML files
app.get('/signup', (_, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'signup.html'));
});

app.get('/login', (_, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});

app.get('/index', (_, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});


// Log all unmatched requests to catch what's trying to access weird paths
app.use((req, res, next) => {
  console.warn(`404 - Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).send('Page not found');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Signup page: http://localhost:${PORT}/signup`);
  console.log(`Login page: http://localhost:${PORT}/login`);
}); 