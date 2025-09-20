import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const CAROUSEL_DIR = path.join(process.cwd(), 'public', 'assets', 'carousel');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    if (!fs.existsSync(CAROUSEL_DIR)) {
      return res.status(404).json({ error: 'Carousel directory not found' });
    }

    const files = fs.readdirSync(CAROUSEL_DIR);
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const images = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    images.sort();

    res.status(200).json({ images });
  } catch (error) {
    console.error('Error reading carousel directory:', error);
    res.status(500).json({ error: 'Failed to read carousel images' });
  }
}
