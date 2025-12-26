# Flowchart switch

## flowchart

```mermaid
flowchart
  start@{shape: circle}
  input@{shape: lean-r, label: 'Input : IS_FEATURE_ACTIVE = "" , num = 100'}
  true@{shape: diamond, label: 'IS_FEATURE_ACTIVE === true'}
  outputTrue@{shape: lean-r, label : 'Output : "Hello"'}
  false@{shape: diamond, label: 'IS_FEATURE_ACTIVE === false'}
  outputFalse@{shape: lean-r, label : 'Output : "Hi"'}
  default@{shape: diamond, label: 'num === 100'}
  defaultTrue@{shape: lean-r, label : 'Output : num'}
  defaultFalse@{shape: lean-r, label : 'Output : "Bonjour!"'}
  lanjutan@{shape: lean-r, label : 'Output : "Lanjutan"'}

  selesai@{shape: dbl-circ, label: "Selesai"}

  start --> input
  input --> true
  true --True --> outputTrue -->  lanjutan
  true --False --> false
  false --True-->  outputFalse  -->  lanjutan
  false --False--> default
  default --True--> defaultTrue -->  lanjutan
  default --False--> defaultFalse -->  lanjutan
  lanjutan --> selesai




```
