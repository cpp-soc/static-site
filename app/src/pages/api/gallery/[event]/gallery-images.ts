import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { event } = req.query;

    if (!event || typeof event !== 'string') {
      return res.status(400).json({ error: 'Event name is required' });
    }

    const GALLERY_DIR = path.join(process.cwd(), 'public', 'assets', 'gallery', event);

    if (!fs.existsSync(GALLERY_DIR)) {
      return res.status(404).json({ error: 'Gallery directory not found' });
    }

    const files = fs.readdirSync(GALLERY_DIR);
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const images = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    images.sort();

    res.status(200).json({ images });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    res.status(500).json({ error: 'Failed to read gallery images' });
  }
}
