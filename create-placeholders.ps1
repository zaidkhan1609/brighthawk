# create-placeholders.ps1
# Run from project root. Creates /public/images and /public/icons and writes SVG placeholders.

$root = (Get-Location).Path
$imagesDir = Join-Path $root "public\images"
$iconsDir  = Join-Path $root "public\icons"

# create directories
New-Item -ItemType Directory -Force -Path $imagesDir | Out-Null
New-Item -ItemType Directory -Force -Path $iconsDir  | Out-Null

$files = @{
  # images
  "$imagesDir\blob1.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
  <defs>
    <linearGradient id="g1" x1="0" x2="1">
      <stop offset="0" stop-color="#60a5fa"/>
      <stop offset="1" stop-color="#7c3aed"/>
    </linearGradient>
    <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="b"/>
      <feComposite in="b" in2="SourceGraphic" operator="atop"/>
    </filter>
  </defs>
  <g filter="url(#f1)">
    <path d="M120,440 C60,370 20,300 40,210 C60,120 160,80 260,60 C360,40 460,80 520,150 C580,220 520,320 460,380 C400,440 240,510 120,440Z" fill="url(#g1)"/>
  </g>
</svg>
'@

  "$imagesDir\blob2.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
  <defs>
    <linearGradient id="g2" x1="0" x2="1">
      <stop offset="0" stop-color="#34d399"/>
      <stop offset="1" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <path d="M80,120 C140,40 260,20 360,40 C460,60 540,120 520,220 C500,320 420,380 320,420 C220,460 120,460 80,360 C40,260 20,200 80,120Z" fill="url(#g2)"/>
</svg>
'@

  "$imagesDir\devops-3d.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <defs>
    <linearGradient id="heroG" x1="0" x2="1">
      <stop offset="0" stop-color="#0ea5e9"/>
      <stop offset="1" stop-color="#8b5cf6"/>
    </linearGradient>
    <radialGradient id="nodeG" cx="50%" cy="30%" r="60%">
      <stop offset="0" stop-color="#fff" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#7c3aed" stop-opacity="0.9"/>
    </radialGradient>
  </defs>

  <!-- background rounded panel -->
  <rect x="40" y="30" rx="32" ry="32" width="880" height="480" fill="url(#heroG)" opacity="0.12"/>

  <!-- pipeline -->
  <g transform="translate(100,100)">
    <rect x="0" y="80" rx="18" ry="18" width="680" height="80" fill="#ffffff" opacity="0.06"/>
    <g transform="translate(20,90)">
      <circle cx="60" cy="-10" r="30" fill="url(#nodeG)" />
      <rect x="110" y="-20" width="140" height="40" rx="8" fill="#fff" opacity="0.08"/>
      <circle cx="320" cy="-10" r="30" fill="#60a5fa"/>
      <rect x="360" y="-20" width="160" height="40" rx="8" fill="#fff" opacity="0.08"/>
      <circle cx="580" cy="-10" r="30" fill="#34d399"/>
    </g>
  </g>

  <text x="140" y="260" font-family="Inter, Arial, sans-serif" font-size="22" fill="#0f172a">DevOps pipeline • CI/CD • Observability • Cloud</text>
</svg>
'@

  "$imagesDir\team-3d.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360">
  <defs>
    <linearGradient id="t1" x1="0" x2="1"><stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect x="10" y="10" rx="24" width="580" height="340" fill="#ffffff" opacity="0.03"/>
  <g transform="translate(40,40)">
    <circle cx="80" cy="80" r="50" fill="url(#t1)" />
    <circle cx="220" cy="60" r="40" fill="#a78bfa" opacity="0.95"/>
    <circle cx="360" cy="90" r="46" fill="#34d399" />
    <text x="20" y="180" font-family="Inter, Arial" font-size="18" fill="#0f172a">Our engineering & operations team</text>
  </g>
</svg>
'@

  "$imagesDir\illustration-1.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 240">
  <defs><linearGradient id="g3" x1="0" x2="1"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs>
  <rect rx="20" width="360" height="240" fill="url(#g3)" opacity="0.09"/>
  <circle cx="80" cy="100" r="36" fill="#fff" opacity="0.15"/>
  <rect x="140" y="60" width="120" height="80" rx="12" fill="#fff" opacity="0.08"/>
</svg>
'@

  # icons (simple)
  "$iconsDir\devops.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><linearGradient id="ig" x1="0" x2="1"><stop offset="0" stop-color="#2563EB"/><stop offset="1" stop-color="#7C3AED"/></linearGradient></defs>
  <rect x="6" y="18" width="52" height="28" rx="6" fill="url(#ig)"/>
  <g fill="#fff"><circle cx="20" cy="32" r="4"/><rect x="28" y="28" width="8" height="8" rx="2"/></g>
</svg>
'@

  "$iconsDir\software.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect x="8" y="14" width="48" height="36" rx="6" fill="#60A5FA"/>
  <text x="16" y="38" fill="#fff" font-size="14" font-family="Arial">{"</>"}</text>
</svg>
'@

  "$iconsDir\bigdata.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <ellipse cx="32" cy="22" rx="20" ry="8" fill="#34D399"/>
  <ellipse cx="32" cy="32" rx="20" ry="8" fill="#10B981" opacity="0.95"/>
  <ellipse cx="32" cy="42" rx="20" ry="8" fill="#059669" opacity="0.85"/>
</svg>
'@

  "$iconsDir\cicd.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect x="10" y="18" width="44" height="28" rx="6" fill="#06b6d4"/>
  <path d="M20 30 L28 36 L20 42" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M44 30 L36 36 L44 42" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
'@

  "$iconsDir\monitor.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect x="8" y="12" width="48" height="32" rx="4" fill="#7C3AED"/>
  <rect x="16" y="20" width="32" height="16" rx="2" fill="#fff" opacity="0.12"/>
  <rect x="24" y="48" width="16" height="6" rx="2" fill="#0f172a"/>
</svg>
'@

  "$iconsDir\cloud.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M20 40h28a8 8 0 0 0 0-16 12 12 0 0 0-23-2 6 6 0 0 0-5 8 6 6 0 0 0 0 10z" fill="#60A5FA"/>
</svg>
'@

  "$iconsDir\kubernetes.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="28" fill="#0EA5E9"/>
  <path d="M32 10 L32 54 M18 22 L46 42" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
</svg>
'@

  "$iconsDir\security.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M32 8 L52 18 V34 C52 46 40 56 32 56 C24 56 12 46 12 34 V18 Z" fill="#34D399"/>
  <circle cx="32" cy="30" r="6" fill="#fff"/>
</svg>
'@

  "$iconsDir\support.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M10 42 C10 28 22 18 32 18 C42 18 54 28 54 42" fill="#8B5CF6"/>
  <rect x="22" y="44" width="20" height="8" rx="4" fill="#fff"/>
</svg>
'@

  "$iconsDir\integrated.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <g fill="#2563EB"><rect x="6" y="18" width="24" height="28" rx="4"/><rect x="34" y="18" width="24" height="28" rx="4"/></g>
  <path d="M30 32 H34" stroke="#fff" stroke-width="2"/>
</svg>
'@

  "$iconsDir\scale.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M10 44 L32 18 L54 44" fill="#34D399"/>
  <rect x="24" y="44" width="16" height="8" rx="3" fill="#2563EB"/>
</svg>
'@

  "$iconsDir\team.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="20" cy="24" r="8" fill="#60A5FA"/>
  <circle cx="44" cy="24" r="8" fill="#34D399"/>
  <rect x="12" y="36" width="40" height="14" rx="6" fill="#7C3AED"/>
</svg>
'@

  "$iconsDir\logo-placeholder-1.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">
  <defs><linearGradient id="lg" x1="0" x2="1"><stop offset="0" stop-color="#2563EB"/><stop offset="1" stop-color="#7C3AED"/></linearGradient></defs>
  <rect width="120" height="40" rx="6" fill="none"/>
  <text x="8" y="26" font-family="Inter, Arial" font-weight="700" font-size="18" fill="url(#lg)">BrightHawk</text>
</svg>
'@

  "$iconsDir\logo-placeholder-2.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">
  <rect width="120" height="40" rx="6" fill="#f8fafc"/>
  <circle cx="20" cy="20" r="10" fill="#60a5fa"/>
  <text x="40" y="26" font-family="Inter, Arial" font-weight="700" font-size="16" fill="#0f172a">Client</text>
</svg>
'@

  "$iconsDir\logo-placeholder-3.svg" = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">
  <rect width="120" height="40" rx="6" fill="#fff"/>
  <rect x="8" y="8" width="24" height="24" rx="6" fill="#34d399"/>
  <text x="40" y="26" font-family="Inter, Arial" font-weight="700" font-size="16" fill="#0f172a">Client</text>
</svg>
'@
}

# write files
foreach ($path in $files.Keys) {
  $content = $files[$path]
  $dir = Split-Path $path
  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
  }
  $content | Set-Content -Path $path -Encoding utf8
  Write-Host "Wrote $path"
}

Write-Host "All placeholders created. Restart dev server if needed."
