function setUpListTree() {
    if (!document.getElementById || !document.createElement) return false;

    var tree_root = document.getElementById("expand-list-tree");
    if (!tree_root) return false;

    var branches = tree_root.getElementsByTagName("ul");
    for (var i = 0; i < branches.length; i++) {
        var branch = branches[i].parentNode;
        branch.className = "closed";

    var expander = document.createElement('a');
    expander.setAttribute('href', '#');
    expander.className = "expander-closed";
    expander.setAttribute('title', 'Öppna');
    branch.insertBefore(expander, branch.firstChild);

    expander.addEventListener("click", function(evt){
        evt.preventDefault();
        if(this.parentNode.className == "closed") {
            this.parentNode.className = "open";
            this.className = "expander-opened";
            this.setAttribute('title', 'Stäng');
        } else {
            this.parentNode.className = "closed";
            this.className = "expander-closed";
            this.setAttribute('title', 'Öppna');
        }
    }, false);
    }
}


setUpListTree();