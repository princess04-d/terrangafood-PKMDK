<div className="restaurant-detail-header">
  <h1>{restaurant.nom}</h1>
  <p>{restaurant.description}</p>

  <div className="restaurant-detail-info">
    <span>🍽️ {restaurant.cuisine}</span>
    <span>📍 {restaurant.adresse}</span>
    {restaurant.telephone && <span>📞 {restaurant.telephone}</span>}
    <span>🕐 {restaurant.horaires?.ouverture} — {restaurant.horaires?.fermeture}</span>
    <span>⭐ {restaurant.note}/5</span>
  </div>

  {/* ✅ BOUTON AJOUTÉ ICI */}
  <div style={{ marginTop: '20px' }}>
    <Link
      href={`/commander/${restaurant._id}`}
      style={{
        display: 'inline-block',
        padding: '10px 24px',
        background: '#52B788',
        color: 'white',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '1rem',
      }}
    >
      Commander ici
    </Link>
  </div>
</div>

