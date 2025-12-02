function setAboutPage() {
    const content = document.querySelector('#content');
    function createTitle(){
        let div = document.createElement('div');
        div.classList.add('title');
        
        let title = document.createElement('h1');
        title.innerText = 'About us!';

        let text = document.createElement('p');
        text.innerText = 'Here is the history of our restaurant:';

        div.appendChild(title);
        div.appendChild(text);
        return div;
    }
    function createParagraph(text){
        let div = document.createElement('div');
        div.classList.add('container');

        let paragraph = document.createElement('p');
        paragraph.innerText = text;

        div.appendChild(paragraph);
        return div;
    }

    function createText(text){
        for (let paragraph of text){
            content.appendChild(createParagraph(paragraph));
        };
    }

    content.appendChild(createTitle());
    createText(aboutUsText);
};

const aboutUsText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida orci eu augue dignissim, at vestibulum nunc malesuada. Aliquam id ipsum nec risus convallis interdum. Ut ante dolor, rhoncus et fringilla nec, dignissim nec lectus. Donec tristique lobortis augue et placerat. Pellentesque urna metus, pretium a sollicitudin sed, scelerisque eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate suscipit urna, eget aliquet ipsum interdum non. Etiam aliquam nulla nisl, aliquet feugiat libero fermentum ut. Etiam rutrum elementum vehicula.',
'Vestibulum viverra dictum mi nec gravida. Phasellus nec consectetur purus. Quisque eu nisl commodo, consequat massa a, tristique ligula. Curabitur sapien mauris, iaculis eget luctus suscipit, faucibus sed lorem. Nullam eget turpis et justo euismod blandit ut auctor diam. Morbi scelerisque nisl sem, ut maximus purus laoreet vel. Morbi eu dui sed tellus cursus commodo. Donec vel turpis sem. Mauris eget mauris nec purus ultrices vehicula et vitae nunc. Vestibulum nulla ipsum, auctor sed nisl sit amet, suscipit egestas orci. Nullam ut elementum ante. Sed semper hendrerit lacus id interdum. Ut nunc nulla, posuere quis dolor vitae, vehicula pulvinar dolor. Cras lacinia, sem placerat pharetra placerat, nunc ligula pulvinar leo, consequat laoreet metus neque eu felis. Sed tincidunt ultricies suscipit. Morbi sollicitudin nibh sed blandit sollicitudin.',
'Cras a nulla a sem aliquet ultricies sit amet a ligula. Integer porta vestibulum viverra. Nunc tempus, tortor id lacinia posuere, purus elit tincidunt mauris, sit amet venenatis nulla dui quis ipsum. Integer varius purus non justo sagittis suscipit. Suspendisse vehicula scelerisque lectus, ut commodo ex euismod eget. Aliquam lacus diam, sollicitudin non scelerisque nec, eleifend faucibus ligula. Cras tempor sit amet orci non scelerisque. Donec et dolor vel enim molestie porta et vitae magna. In hac habitasse platea dictumst. Praesent sagittis condimentum ex, at bibendum dui elementum convallis.',
'Duis auctor est vel tempor sodales. Duis tristique a magna et euismod. Sed nec finibus urna. Donec sollicitudin vehicula metus, non sollicitudin odio cursus pellentesque. Vivamus massa augue, molestie eget tellus eu, cursus tincidunt eros. Cras sit amet dolor et dolor sodales molestie. Suspendisse eu eleifend nisl, in volutpat nisi. Nulla facilisi. Curabitur laoreet libero et cursus pellentesque. Praesent pellentesque nec augue sed porta. Donec non vestibulum ligula, in fringilla tellus. Cras blandit eu nulla a venenatis. Fusce vitae ante non velit suscipit sollicitudin in at magna. Praesent posuere fermentum massa eu sollicitudin.',
'Vestibulum nec venenatis nulla. Vivamus vulputate in orci sed laoreet. In porttitor dictum gravida. Aliquam non finibus risus. In porttitor nisl diam, at consequat augue fringilla non. Nulla vel justo sed enim pulvinar rutrum. Etiam id augue neque. Praesent placerat rutrum sem, id finibus mauris varius sed. Curabitur nec lacus gravida, lobortis mauris non, vulputate leo. Integer mollis eros eros, a blandit dui cursus et. Cras quis ligula at nunc eleifend lobortis quis a dolor. Suspendisse nec metus quis ipsum venenatis ornare. Vestibulum in ipsum eu velit tristique mollis in nec orci. Suspendisse aliquet scelerisque risus, in vulputate diam imperdiet congue.'];

export {setAboutPage as default};