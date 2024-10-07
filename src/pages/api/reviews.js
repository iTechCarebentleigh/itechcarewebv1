import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { placeId } = req.query;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.NEXT_PUBLIC_PLACES_ID}&fields=name,rating,reviews&key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result && data.result.reviews) {
      // Map reviews to include only the necessary fields
      const reviews = data.result.reviews.map(review => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        profile_photo_url: review.profile_photo_url || '' // Include the photo if available
      }));

      res.status(200).json({ reviews });
    } else {
      res.status(404).json({ error: 'No reviews found for this place.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}
