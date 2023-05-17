import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"






const Forecast = ({ data }) => {
    return (
        
        <div>

            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
           {data.list.splice(0, 7).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            hello
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Forecast;