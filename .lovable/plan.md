

## Adicionar Novo Robô Mascote ao Site

### Resumo
Vou substituir o robô atual pelo novo mascote que você enviou. O novo robô tem o logo "SC" (Satecar) e um visual moderno em azul e branco que combina perfeitamente com o tema do site.

### O Que Será Feito

1. **Salvar a nova imagem do robô**
   - Copiar a imagem enviada para a pasta de assets do projeto
   - Nome do arquivo: `src/assets/robot-mascot-new.png`

2. **Atualizar a seção de serviços**
   - Trocar a imagem do robô atual pela nova
   - Manter as animações de flutuação e efeitos visuais existentes

---

### Detalhes Técnicos

**Arquivo a ser modificado:** `src/components/ServicesSection.tsx`

**Alteração no import:**
```typescript
// De:
import robotImage from "@/assets/robot-transparent.png";

// Para:
import robotImage from "@/assets/robot-mascot-new.png";
```

O restante do código (posicionamento, tamanho, animações) permanece inalterado, garantindo que o novo robô herde todo o comportamento visual premium já implementado.

