import { rest } from "msw";
import { API_URL } from "../app/constants";

interface QuoteService {
  getQuote(character: string): Promise<any>;
}

class SimpsonsQuoteService implements QuoteService {
  async getQuote(character: string): Promise<any> {
    if (character === "Pedro Pablo") {
      throw new Error("Invalid character");
    } else if (character === "Homer Simpson") {
      return {
        quote: "Marriage is like a coffin and each kid is another nail.",
        character: "Homero Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        characterDirection: "Right",
      };
    } else {
      return {
        
        quote: "Thank you. Come again.",
        character: "Apu Nahasapeemapetilon",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
        characterDirection: "Left",
      };
    }
  }
}

export const handlers = [
  rest.get(`${API_URL}`, async (req, res, ctx) => {
    const character = req.url.searchParams.get("character");

    if (!character) {
      const quoteService: QuoteService = new SimpsonsQuoteService();
      try {
        const quote = await quoteService.getQuote("Homer Simpson");
        return res(ctx.status(200), ctx.json([quote]));
      } catch (error) {
        return res(ctx.status(403));
      }
    } else {
      return res(ctx.status(400), ctx.json({ error: "Character parameter is missing" }));
    }
  }),
];
