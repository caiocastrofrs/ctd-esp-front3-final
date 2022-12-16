import { Accordion,AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqsData, FaqsType } from "./faqsData"
import { Container } from '@mui/system';

export const FaqPage = () => {
    return(
    <Container>
      <Typography variant="h4" sx={{ textAlign: 'center', margin: 5}}>Perguntas & Respostas</Typography>
      {
        faqsData.map((data: FaqsType) => {
          return (
            <Accordion key={data.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{data.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {data.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>)
        })}
    </Container>
  )
}
