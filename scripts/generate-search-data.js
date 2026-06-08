// Genera search-data.json para el buscador cliente
// Se ejecuta automáticamente antes del build
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '..', 'src', 'data', 'dentistas.json');
const outputPath = path.join(__dirname, '..', 'public', 'search-data.json');

const raw = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const searchData = raw.dentistas.map(d => ({
  t: d.title,           // title
  s: `/${d.slug}/`,     // slug/url
  c: d.category || '',  // category
  d: d.description || '', // description
  r: d.rating || 0,     // rating
}));

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(searchData), 'utf-8');
console.log(`✅ search-data.json generado con ${searchData.length} dentistas`);
