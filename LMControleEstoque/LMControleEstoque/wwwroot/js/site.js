// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$('#myTable').DataTable({
    "ordering": true,
    "paging": true,
    "searching": true,
    "oLanguage": {
        "sEmptyTable": "Nenhum produto encontrado na tabela",
        "sInfo": "Mostrar _START_ até _END_ de _TOTAL_ produtos",
        "sInfoEmpty": "Mostrar 0 até 0 de 0 produtos",
        "sInfoFiltered": "(Filtrar de _MAX_ total produtos)",
        "sInfoPostFix": "",
        "sInfoThousands": ".",
        "sLengthMenu": "Mostrar _MENU_ produtos por pagina",
        "sLoadingRecords": "Carregando...",
        "sProcessing": "Processando...",
        "sZeroRecords": "Nenhum produto encontrado",
        "sSearch": "Pesquisar",
        "oPaginate": {
            "sNext": "Proximo",
            "sPrevious": "Anterior",
            "sFirst": "Primeiro",
            "sLast": "Ultimo"
        },
        "oAria": {
            "sSortAscending": ": Ordenar colunas de forma ascendente",
            "sSortDescending": ": Ordenar colunas de forma descendente"
        }
    }
});