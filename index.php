<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta author="Rick Deurloo">
  <meta name="description" content="Website description">
  <meta name="keywords" content="Website keywords">
  <!-- <meta name="theme-color" content="#f89a90"> -->

  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css">
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-thin.css">
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css">
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-regular.css">
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-light.css">

  <link rel="stylesheet" href="./styles/dist/css/main.css">

  <link rel="icon" href="./assets/ico/ico-light.ico" type="image/x-icon" media="(prefers-color-scheme: light)">
  <link rel="icon" href="./assets/ico/ico-dark.ico" type="image/x-icon" media="(prefers-color-scheme: dark)">

  <title>Vividly – Home</title>
</head>
<body>
  
  <nav>
    <a href="categories.html" class="nav-link">
      <i class="fa-solid fa-sharp fa-layer-group"></i>
    </a>
    <a href="search.html" class="nav-link">
      <i class="fa-solid fa-sharp fa-magnifying-glass"></i>
    </a>
    <a href="index.html" class="nav-link">
      <i class="fa-solid fa-sharp fa-house active"></i>
    </a>
    <a href="ai.html" class="nav-link">
      <i class="fa-solid fa-sharp fa-robot"></i>
    </a>
    <a href="profile.html" class="nav-link">
      <i class="fa-solid fa-user"></i>
    </a>
  </nav>

  <main class="home-page">
    <div class="home-page-header">
      <div class="device-dropdown">
        <div class="dropdown-btn">
          <span class="selected-device">Select device</span>
          <div class="seperator"></div>
          <i class="fa-solid fa-sharp fa-caret-down dropdown-icon"></i>
        </div>
        <div class="dropdown-content">
          <div class="option">All Devices</div>
          <div class="option">Mobile</div>
          <div class="option">Tablet</div>
          <div class="option">Desktop</div>
        </div>
      </div>
      <div class="brand-section">
        <span class="title">Vividly</span>
        <img src="./assets/blue-icon.png" alt="" class="logo">
      </div>
    </div>
    <div class="image-container">
      <?php include_once './subscripts/getImages.php'; ?>
    </div>
    <div id="pagination"></div>
  </main>

  <div class="image-popup">
    <div class="popup-container">
      <i class="fa-solid fa-sharp fa-xmark close-popup"></i>
      <div class="image-functions">
        <div class="favorite-btn" title="Favorite">
          <i class="fa-solid fa-sharp fa-heart"></i>
        </div>
        <div class="download-btn" title="Download">
          <i class="fa-solid fa-sharp fa-download"></i>
        </div>
        <div class="copy-btn" title="Copy">
          <i class="fa-solid fa-sharp fa-paperclip"></i>
        </div>
        <div class="fullsize-btn" title="Full Size">
          <i class="fa-solid fa-sharp fa-expand"></i>
        </div>
      </div>
    </div>
  </div>
  
  <script src="./js/home-page.js"></script>
</body>
</html>