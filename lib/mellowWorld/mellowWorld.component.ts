import { Component } from '@angular/core'

@Component({
    selector: 'mellow-world',
    template: `<section id="mellow-world">
    <h2><i>Mellow</i> World...</h2>
    <p>Oh so mellow</p>
</section>`,
    styles: [`#mellow-world {
    width: 400px;
    font-family: sans-serif;
    background: #99E343;
}`]
})

export class MellowWorldComponent { }