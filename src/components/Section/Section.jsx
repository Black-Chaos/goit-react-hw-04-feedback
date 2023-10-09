import { Container } from "./Section.styled";

export function Section({title, children}) {
    return (
        <Container>
            <h2 className="section-title">{title}</h2>
            {children}
        </Container>
    )
}