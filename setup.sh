#!/bin/bash

# TriForge Tech Setup Script
echo "🚀 Setting up TriForge Technologies Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from example..."
    cp .env.local.example .env.local
    echo "✅ Environment file created!"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Update .env.local with your site configuration (optional)"
echo "   2. Run 'npm run dev' to start the development server"
echo "   3. Visit http://localhost:3000"
echo "   4. Add content by creating MDX files in content/blog/"
echo ""
echo "📚 Read README.md for detailed instructions"
echo ""
