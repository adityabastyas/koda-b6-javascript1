# Algoritma Javascript 1

## Task 1

## Flowchart

```mermaid
flowchart TD

  A@{shape: circle, label: "start"}
  B@{shape: lean-r, label: "input : r , phi"}
  C@{shape: rect, label: "luasLingkaran =  phi * r * r"}
  D@{shape: lean-r, label: 'Output: "luas lingkaran adalah " + luasLingkaran'}
  E@{shape: rect, label: "kelilingLingkaran = 2 * phi * r"}
  F@{shape: lean-r, label: 'Output: "keliling lingkaran adalah " + kelilingLingkaran'}
  G@{shape: dbl-circ, label: "selesai"}

  A --> B
  B --> C
  C --> D
  D --> E
  E --> F
  F --> G
```
