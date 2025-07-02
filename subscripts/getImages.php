<?php
echo '<script>
const uploadImages = [';
$dir = "./uploads/";
$allowed_types = ["jpg", "jpeg", "png", "webp", "avif"];
$files = scandir($dir);
$first = true;
foreach ($files as $file) {
  $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
  if (in_array($ext, $allowed_types)) {
      if (!$first) echo ",";
      echo '"' . $dir . $file . '"';
      $first = false;
  }
}
echo '];
</script>';
?>