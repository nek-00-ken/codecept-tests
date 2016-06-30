Feature('Project');

Before((I, config) => {
    I.login(config.username, config.password);
});

Scenario('Create with default quotas', (I) => {
    I.loadPage('/admin/projects/new');

    I.appendField('name', 'projectName');
    I.appendField('client', 'clientName');
    I.appendField('billingId', 'billingId');
    I.appendField('description', 'description');
    I.appendField('tags', 'tag1, tag2, tag3');
    I.checkOption('//*[@id="main-content"]/div[4]/div/div[3]/div/div[2]/form/fieldset[3]/div/div[2]/div[1]/label/span');

    I.wait(10);


});
